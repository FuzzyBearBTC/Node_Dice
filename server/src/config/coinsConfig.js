import BTC from '../app/helper/bitcoinHelper';
import NXT from '../app/helper/nxtHelper';
import RPI from '../app/helper/rpiHelper';
export default {
    'BTC': BTC,
    'NXT': NXT,
	'RPI': RPI,
    getCoinNames: function () {
        return [
            { coinName: 'BTC', min: 0.00000001, max: 1 }
            , { coinName: 'NXT', min: 1, max:1000 }
			, { coinName: 'RPI', min: 1, max:10000 }
        ];
    }
};