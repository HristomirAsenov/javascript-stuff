import extend from '../utils/context.js';

export default {
    get: {
        home(context) {

            console.log(context);

            
            extend(context).then(function () {
                this.partial("../views/home/home.hbs");
            });
        }
    }
}