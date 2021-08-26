import { createStore, createLogger } from "vuex";
import { mainModule } from "@/store/mainModule";

export default createStore ({
  plugins: [createLogger()],
  modules: {
    main: mainModule
  }
});