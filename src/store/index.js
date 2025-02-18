import { combineReducers, createStore } from "redux";
import { formReducer } from "./form/reducer";
import { hotelsReducer } from "./pageHotels/reducer";
import { userReducer } from "./users/reducer";
import { hotelPricesReducer } from "./hotel_prices/reducer";
import { cityIdReducer } from "./city_id/reducer";
import { bookingReduser } from "./booked/reduser";

const rootReducer = combineReducers({
  form: formReducer,
  hotels: hotelsReducer,
  users: userReducer,
  hotel_price: hotelPricesReducer,
  city_id: cityIdReducer,
  booked: bookingReduser,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
