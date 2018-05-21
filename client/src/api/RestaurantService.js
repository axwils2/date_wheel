// Dependencies
// -----------------------------------
import request from '../ApiClient';

// -----------------------------------
// CLASS->RESTAURANT-SERVICE ---------
// -----------------------------------
export default class RestaurantService {
  // Index
  // -----------------------------------
  static index(userId) {
    return request({
      url: `/${userId}/restaurants`,
      method: 'GET'
    });
  }
}