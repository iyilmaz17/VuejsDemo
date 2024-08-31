import { ref, onMounted, onBeforeUnmount } from "vue";

export function useNavbar() {
  const targetTime = new Date().getTime() + 10 * 60 * 60 * 1000;
  const timeLeft = ref("");
  const showMessageBar = ref(true);

  let countdownInterval: number;

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timeLeft.value = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    if (distance < 0) {
      clearInterval(countdownInterval);
      timeLeft.value = "EXPIRED";
    }
  }

  function pad(number: number) {
    return number < 10 ? "0" + number : number;
  }

  function closeBar() {
    const countdownBar = document.querySelector(
      ".countdown-bar"
    ) as HTMLElement;
    if (countdownBar) {
      countdownBar.style.display = "none";
    }
  }

  function closeMessageBar() {
    showMessageBar.value = false;
  }

  onMounted(() => {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
  });

  onBeforeUnmount(() => {
    clearInterval(countdownInterval);
  });

  return {
    timeLeft,
    showMessageBar,
    closeBar,
    closeMessageBar,
  };
}
