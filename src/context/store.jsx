import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(
  devtools(set => ({
    introPass: true,
    trueIntroPass() {
      set(() => ({ introPass: true }));
    },
    falseIntroPass() {
      set(() => ({ introPass: false }));
    },
  }))
);
export default useStore;
