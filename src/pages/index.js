import HomePage from './Home';
import SearchPage from './Search';
import CustomerProfilePage from './CustomerProfile';
import pages from './constants';

export const pageMap = new Map([
    [pages.HOME, HomePage],
    [pages.SEARCH, SearchPage],
    [pages.PROFILE, CustomerProfilePage]
  ]);
  
export {
    HomePage,
    SearchPage,
    CustomerProfilePage,
    pages,
}