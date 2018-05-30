import HomePage from './Home';
import SearchPage from './Search';
import CustomerProfilePage from './CustomerProfile';

export {
    HomePage,
    SearchPage,
    CustomerProfilePage
}

export const pageMap = new Map([
    ['coral.home', HomePage],
    ['coral.search', SearchPage],
    ['coral.customer-profile', CustomerProfilePage]
]);