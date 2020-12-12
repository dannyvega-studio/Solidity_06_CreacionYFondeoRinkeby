let CrowdFundingWithDeadline = artifacts.require('./CrowdFundingWithDeadline')

contract('CrowdFundingWithDeadline', function(accounts) {

    let contract;
    let contractCreator = accounts[0];
    let beneficiary = accounts[1];

    const ONE_ETH = 1000000000000000000;

    const ONGOING_STATE = '0';
    const FAILED_STATE = '1';
    const SUCCEEDED_STATE = '2';
    const PAID_OUT_STATE = '3';

    beforeEach(async function() {
        contract = await CrowdFundingWithDeadline.new(
            'funding', 1, 10, beneficiary,
            {
                from: contractCreator,
                gas: 2000000
            }
        ); 
    });

    it('contract is initialized', async function() {
        let campaignName = await contract.name.call()
        expect(campaignName).to.equal('funding');

        let targetAmount = await contract.targetAmount.call()
        expect(targetAmount.toString()).to.equal(ONE_ETH.toString());

        let actualBeneficiary = await contract.beneficiary.call()
        expect(actualBeneficiary).eql(beneficiary);

        let state = await contract.state.call()
        expect(state.toString()).to.equal(ONGOING_STATE);
    });

    it('funds are contributed', async function() {
        await contract.contribute({
            value: ONE_ETH,
            from: contractCreator
        });

        let contributed = await contract.amounts.call(contractCreator);
        expect(contributed.toString()).to.equal(ONE_ETH.toString());

        let totalCollected = await contract.totalCollected.call();
        expect(totalCollected.toString()).to.equal(ONE_ETH.toString());

    })

});