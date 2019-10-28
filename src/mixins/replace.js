export default {
	methods: {
		Phone(payload) {
			if ( !payload ) return '-'

		    else {
		        if ( payload == 'start') return 'Liga';

		        else{
		            let n = new String(payload);

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
		                    return payload;
		                    break;
		            }
		        }
		    }
		},

		LimpaNum(payload) {
			const number = payload.replace( /[^0-9]/g, '');
    		return number;
		},

		DateFormat(payload) {
			const ano = payload.slice(0,4)
			const mes = payload.slice(5, 7)
			const dia = payload.slice(8, 10)

			return `${dia}/${mes}/${ano}`
		}
	}
}