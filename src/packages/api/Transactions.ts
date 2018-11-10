import { APIServerClass } from '@/packages/api/APIServer';

export class Transactions extends APIServerClass
{
	public async getBalance(address)
	{
		const res = await this.api.get(`/balance/get/${address}`);

		return res;
	}

	public async latestBlock()
	{
		const res = await this.api.get('/block/newest');

		return res;
	}
}