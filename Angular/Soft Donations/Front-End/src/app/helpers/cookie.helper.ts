import { environment } from '../../environments/environment';

const cookieName = environment.cookieName;

export const cookieHelper = {
    parse: () => {

        const eqlSignIndex: number = document.cookie.indexOf('=');

        if (eqlSignIndex === 12) {
            const [cookieKey, cookieValue] = document.cookie.split('=', 1);

            if (cookieKey === cookieName) {
                return { cookieKey, cookieValue };
            }
        }
        return null;
    },

    destroy: () => {
        document.cookie = "";
    }
}