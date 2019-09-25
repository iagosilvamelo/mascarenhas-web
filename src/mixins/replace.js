export default {
	methods: {
		Phone(val) {
			if ( !val ) return '-'

		    else {
		        if ( val == 'start') return 'Liga';

		        else{
		            let n = new String(val);

		            switch ( n.length ){
		                case 11:
		                    return '(' + n.slice(0, 2) + ') ' + n.slice(2, 7) + '-' + n.slice(7);
		                    break;

		                case 10:
		                    return '(' + n.slice(0, 2) + ') ' + n.slice(2, 6) + '-' + n.slice(6);
		                    break;

		                case 9:
		                    return n.slice(0, 5) + '-' + n.slice(5);
		                    break;

		                case 8:
		                    return n.slice(0, 4) + '-' + n.slice(4);
		                    break;

		                default:
		                    return val;
		                    break;
		            }
		        }
		    }
		},

		LimpaNum(val) {
			const number = val.replace( /[^0-9]/g, '');
    		return number;
		}
	}
}