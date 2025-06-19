module voting_system::dashboard;

use sui::types;

const EDuplicateProposal: u64 = 0;
const EInvalidOneTimeWitness: u64 = 1;

public struct Dashboard has key {
    id: UID,
    proposals_ids: vector<ID>,
}

public struct AdminCapability has key {
    id: UID,
}

// OTW (one time witness) pattern
public struct DASHBOARD has drop {}

fun init(otw: DASHBOARD, ctx: &mut TxContext) {
    new(otw, ctx);
    transfer::transfer(AdminCapability { id: object::new(ctx) }, ctx.sender());
}

public fun new(otw: DASHBOARD, ctx: &mut TxContext) {
    assert!(types::is_one_time_witness(&otw), EInvalidOneTimeWitness);
    let dashboard = Dashboard { id: object::new(ctx), proposals_ids: vector[] };
    transfer::share_object(dashboard);
}

public fun register_proposal(self: &mut Dashboard, _admin_cap: &AdminCapability, proposal_id: ID) {
    assert!(!self.proposals_ids.contains(&proposal_id), EDuplicateProposal);
    self.proposals_ids.push_back(proposal_id);
}

public fun proposal_ids(self: &Dashboard): vector<ID> {
    self.proposals_ids
}

#[test_only]
public fun issue_admin_cap(ctx: &mut TxContext) {
    transfer::transfer(AdminCapability { id: object::new(ctx) }, ctx.sender())
}

#[test_only]
public fun new_otw(_ctx: &mut TxContext): DASHBOARD {
    DASHBOARD {}
}

#[test]
fun test_module_init() {
    use sui::test_scenario;

    let creator = @0xCA;
    let mut scenario = test_scenario::begin(creator);
    {
        let otw = DASHBOARD {};
        init(otw, scenario.ctx());
    };

    scenario.next_tx(creator);
    {
        let dashboard = scenario.take_shared<Dashboard>();
        assert!(dashboard.proposals_ids.is_empty());
        test_scenario::return_shared(dashboard);
    };
    scenario.end();
}
