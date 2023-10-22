import { resetStoreAction } from "../Redux/actions/app.action";
import store from "../Redux/store.redux";

const resetStore = () => {
  store.dispatch(resetStoreAction())
}

export default resetStore;
