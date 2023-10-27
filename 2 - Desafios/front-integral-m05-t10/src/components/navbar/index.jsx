import "./style.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const pink = "#DA0175";
  const grey = "#343447";

  const navigate = useNavigate();

  const paternPage = "home";
  let pageOnLocalStorage = sessionStorage.getItem("page");
  if (!pageOnLocalStorage) {
    sessionStorage.setItem("page", paternPage);
    pageOnLocalStorage = paternPage;
  }

  const handleColorHome = () => {
    sessionStorage.setItem("status", "");
    sessionStorage.setItem("status-charges", "");
    sessionStorage.setItem("page", "home");
    setTimeout(() => navigate("/home"), 500);
  };

  const handleColorClient = () => {
    sessionStorage.setItem("status", "");
    sessionStorage.setItem("status-charges", "");
    sessionStorage.setItem("page", "clients");
    setTimeout(() => navigate("/clients"), 500);
  };

  const handleColorCharge = () => {
    sessionStorage.setItem("status", "");
    sessionStorage.setItem("status-charges", "");
    sessionStorage.setItem("page", "charges");
    setTimeout(() => navigate("/charges"), 500);
  };

  const HomeIcon = () => (
    <svg
      cursor={"pointer"}
      width="48"
      height="48"
      viewBox="0 0 48 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleColorHome}
    >
      <path
        d="M14 38.5004H34.9999C37.2091 38.5004 38.9999 36.7096 38.9999 34.5004V19.5005L24.4999 9.50049L10 19.5005V34.5004C10 36.7096 11.7909 38.5004 14 38.5004Z"
        stroke={
          sessionStorage.getItem("page") === "home" ||
          sessionStorage.getItem("page") == ""
            ? pink
            : grey
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.999 31.4985C19.999 29.2893 21.79 27.4985 23.999 27.4985H24.999C27.2082 27.4985 28.999 29.2893 28.999 31.4985V38.4985H19.999V31.4985Z"
        stroke={
          sessionStorage.getItem("page") === "home" ||
          sessionStorage.getItem("page") == ""
            ? pink
            : grey
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.564 56.64C12.8093 56.64 13.0067 56.72 13.156 56.88C13.3053 57.0293 13.38 57.2267 13.38 57.472V67.248C13.38 67.4933 13.3053 67.696 13.156 67.856C13.0067 68.0053 12.8093 68.08 12.564 68.08C12.3187 68.08 12.1213 68.0053 11.972 67.856C11.8227 67.7067 11.748 67.504 11.748 67.248V62.944H5.444V67.248C5.444 67.4933 5.36933 67.696 5.22 67.856C5.07067 68.0053 4.87333 68.08 4.628 68.08C4.38267 68.08 4.18533 68.0053 4.036 67.856C3.88667 67.7067 3.812 67.504 3.812 67.248V57.472C3.812 57.2267 3.88667 57.0293 4.036 56.88C4.18533 56.72 4.38267 56.64 4.628 56.64C4.87333 56.64 5.07067 56.72 5.22 56.88C5.36933 57.0293 5.444 57.2267 5.444 57.472V61.6H11.748V57.472C11.748 57.2267 11.8227 57.0293 11.972 56.88C12.1213 56.72 12.3187 56.64 12.564 56.64ZM19.1995 68.112C18.4315 68.112 17.7542 67.9467 17.1675 67.616C16.5915 67.2853 16.1435 66.816 15.8235 66.208C15.5142 65.5893 15.3595 64.8747 15.3595 64.064C15.3595 63.2427 15.5142 62.528 15.8235 61.92C16.1435 61.3013 16.5915 60.8267 17.1675 60.496C17.7542 60.1653 18.4315 60 19.1995 60C19.9675 60 20.6395 60.1653 21.2155 60.496C21.8022 60.8267 22.2502 61.3013 22.5595 61.92C22.8795 62.528 23.0395 63.2427 23.0395 64.064C23.0395 64.8747 22.8795 65.5893 22.5595 66.208C22.2502 66.816 21.8022 67.2853 21.2155 67.616C20.6395 67.9467 19.9675 68.112 19.1995 68.112ZM19.1995 66.832C19.9142 66.832 20.4582 66.5973 20.8315 66.128C21.2155 65.6587 21.4075 64.9707 21.4075 64.064C21.4075 63.168 21.2155 62.4853 20.8315 62.016C20.4475 61.536 19.9035 61.296 19.1995 61.296C18.4955 61.296 17.9515 61.536 17.5675 62.016C17.1835 62.4853 16.9915 63.168 16.9915 64.064C16.9915 64.9707 17.1782 65.6587 17.5515 66.128C17.9355 66.5973 18.4848 66.832 19.1995 66.832ZM33.7988 60C35.5481 60 36.4228 61.0507 36.4228 63.152V67.312C36.4228 67.5573 36.3481 67.7493 36.1988 67.888C36.0494 68.016 35.8521 68.08 35.6068 68.08C35.3721 68.08 35.1801 68.016 35.0308 67.888C34.8814 67.7493 34.8068 67.5573 34.8068 67.312V63.168C34.8068 62.5173 34.6894 62.048 34.4548 61.76C34.2201 61.4613 33.8521 61.312 33.3508 61.312C32.7641 61.312 32.3001 61.5147 31.9588 61.92C31.6174 62.3147 31.4468 62.8587 31.4468 63.552V67.312C31.4468 67.5573 31.3721 67.7493 31.2228 67.888C31.0734 68.016 30.8761 68.08 30.6308 68.08C30.3961 68.08 30.2041 68.016 30.0548 67.888C29.9054 67.7493 29.8308 67.5573 29.8308 67.312V63.168C29.8308 62.5173 29.7134 62.048 29.4788 61.76C29.2441 61.4613 28.8761 61.312 28.3748 61.312C27.7881 61.312 27.3188 61.5147 26.9668 61.92C26.6254 62.3147 26.4548 62.8587 26.4548 63.552V67.312C26.4548 67.5573 26.3801 67.7493 26.2308 67.888C26.0814 68.016 25.8894 68.08 25.6548 68.08C25.4201 68.08 25.2228 68.016 25.0628 67.888C24.9134 67.7493 24.8388 67.5573 24.8388 67.312V60.8C24.8388 60.5653 24.9188 60.3787 25.0788 60.24C25.2388 60.1013 25.4308 60.032 25.6548 60.032C25.8788 60.032 26.0601 60.1013 26.1988 60.24C26.3481 60.368 26.4228 60.5493 26.4228 60.784V61.376C26.6574 60.928 26.9828 60.5867 27.3988 60.352C27.8148 60.1173 28.2948 60 28.8388 60C29.4361 60 29.9268 60.1227 30.3108 60.368C30.7054 60.6133 30.9988 60.992 31.1908 61.504C31.4254 61.0453 31.7721 60.6827 32.2308 60.416C32.6894 60.1387 33.2121 60 33.7988 60ZM44.7476 66.032C44.897 66.032 45.0196 66.0907 45.1156 66.208C45.2116 66.3253 45.2596 66.4747 45.2596 66.656C45.2596 66.9653 45.0676 67.2267 44.6836 67.44C44.3103 67.6533 43.8996 67.8187 43.4516 67.936C43.0143 68.0533 42.593 68.112 42.1876 68.112C40.9503 68.112 39.9743 67.7547 39.2596 67.04C38.545 66.3147 38.1876 65.328 38.1876 64.08C38.1876 63.28 38.3423 62.5707 38.6516 61.952C38.9716 61.3333 39.4143 60.8533 39.9796 60.512C40.5556 60.1707 41.2063 60 41.9316 60C42.977 60 43.8036 60.336 44.4116 61.008C45.0196 61.68 45.3236 62.5867 45.3236 63.728C45.3236 64.1547 45.1316 64.368 44.7476 64.368H39.8036C39.9103 66.0213 40.705 66.848 42.1876 66.848C42.5823 66.848 42.9236 66.7947 43.2116 66.688C43.4996 66.5813 43.8036 66.4427 44.1236 66.272C44.1556 66.2507 44.241 66.208 44.3796 66.144C44.529 66.0693 44.6516 66.032 44.7476 66.032ZM41.9636 61.184C41.345 61.184 40.849 61.3813 40.4756 61.776C40.1023 62.1707 39.8783 62.7253 39.8036 63.44H43.9316C43.8996 62.7147 43.713 62.16 43.3716 61.776C43.041 61.3813 42.5716 61.184 41.9636 61.184Z"
        fill={
          sessionStorage.getItem("page") === "home" ||
          sessionStorage.getItem("page") == ""
            ? pink
            : grey
        }
      />
    </svg>
  );

  const ChargeIcon = () => (
    <svg
      cursor={"pointer"}
      onClick={handleColorCharge}
      width="48"
      height="48"
      viewBox="0 0 77 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 38.5H47C49.2092 38.5 51 36.7092 51 34.5V18L42.5 9.5H30C27.7909 9.5 26 11.2909 26 13.5V34.5C26 36.7092 27.7909 38.5 30 38.5Z"
        stroke={sessionStorage.getItem("page") === "charges" ? pink : grey}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.5 18.5H42V10"
        stroke={sessionStorage.getItem("page") === "charges" ? pink : grey}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.224 68.128C5.14667 68.128 4.208 67.8987 3.408 67.44C2.608 66.9707 1.99467 66.304 1.568 65.44C1.14133 64.5653 0.928 63.536 0.928 62.352C0.928 61.1787 1.14133 60.16 1.568 59.296C1.99467 58.4213 2.608 57.7547 3.408 57.296C4.208 56.8267 5.14667 56.592 6.224 56.592C6.928 56.592 7.59467 56.704 8.224 56.928C8.85333 57.1413 9.40267 57.456 9.872 57.872C10.0747 58.032 10.176 58.2453 10.176 58.512C10.176 58.704 10.1227 58.8693 10.016 59.008C9.90933 59.136 9.78133 59.2 9.632 59.2C9.45067 59.2 9.27467 59.1307 9.104 58.992C8.592 58.608 8.12267 58.3413 7.696 58.192C7.28 58.032 6.80533 57.952 6.272 57.952C5.09867 57.952 4.19733 58.3307 3.568 59.088C2.93867 59.8453 2.624 60.9333 2.624 62.352C2.624 63.7813 2.93867 64.8747 3.568 65.632C4.19733 66.3893 5.09867 66.768 6.272 66.768C6.784 66.768 7.248 66.688 7.664 66.528C8.09067 66.368 8.57067 66.1013 9.104 65.728C9.31733 65.5893 9.49333 65.52 9.632 65.52C9.78133 65.52 9.90933 65.5893 10.016 65.728C10.1227 65.856 10.176 66.016 10.176 66.208C10.176 66.4747 10.0747 66.688 9.872 66.848C9.40267 67.264 8.85333 67.584 8.224 67.808C7.59467 68.0213 6.928 68.128 6.224 68.128ZM15.1839 68.112C14.4159 68.112 13.7385 67.9467 13.1519 67.616C12.5759 67.2853 12.1279 66.816 11.8079 66.208C11.4985 65.5893 11.3439 64.8747 11.3439 64.064C11.3439 63.2427 11.4985 62.528 11.8079 61.92C12.1279 61.3013 12.5759 60.8267 13.1519 60.496C13.7385 60.1653 14.4159 60 15.1839 60C15.9519 60 16.6239 60.1653 17.1999 60.496C17.7865 60.8267 18.2345 61.3013 18.5439 61.92C18.8639 62.528 19.0239 63.2427 19.0239 64.064C19.0239 64.8747 18.8639 65.5893 18.5439 66.208C18.2345 66.816 17.7865 67.2853 17.1999 67.616C16.6239 67.9467 15.9519 68.112 15.1839 68.112ZM15.1839 66.832C15.8985 66.832 16.4425 66.5973 16.8159 66.128C17.1999 65.6587 17.3919 64.9707 17.3919 64.064C17.3919 63.168 17.1999 62.4853 16.8159 62.016C16.4319 61.536 15.8879 61.296 15.1839 61.296C14.4799 61.296 13.9359 61.536 13.5519 62.016C13.1679 62.4853 12.9759 63.168 12.9759 64.064C12.9759 64.9707 13.1625 65.6587 13.5359 66.128C13.9199 66.5973 14.4692 66.832 15.1839 66.832ZM25.0151 60C25.6978 60 26.3005 60.1653 26.8231 60.496C27.3458 60.8267 27.7511 61.296 28.0391 61.904C28.3378 62.512 28.4871 63.2213 28.4871 64.032C28.4871 64.832 28.3378 65.5413 28.0391 66.16C27.7511 66.7787 27.3405 67.2587 26.8071 67.6C26.2845 67.9413 25.6871 68.112 25.0151 68.112C24.4285 68.112 23.9111 67.9893 23.4631 67.744C23.0151 67.488 22.6738 67.1253 22.4391 66.656V67.296C22.4391 67.5307 22.3645 67.7227 22.2151 67.872C22.0765 68.0107 21.8845 68.08 21.6391 68.08C21.3938 68.08 21.1965 68.0107 21.0471 67.872C20.8978 67.7227 20.8231 67.5307 20.8231 67.296V57.408C20.8231 57.1733 20.8978 56.9867 21.0471 56.848C21.2071 56.7093 21.4098 56.64 21.6551 56.64C21.8898 56.64 22.0765 56.7093 22.2151 56.848C22.3645 56.976 22.4391 57.152 22.4391 57.376V61.472C22.6738 61.0027 23.0151 60.64 23.4631 60.384C23.9111 60.128 24.4285 60 25.0151 60ZM24.6311 66.832C25.3245 66.832 25.8631 66.5867 26.2471 66.096C26.6418 65.6053 26.8391 64.9173 26.8391 64.032C26.8391 63.1573 26.6471 62.4853 26.2631 62.016C25.8791 61.536 25.3351 61.296 24.6311 61.296C23.9271 61.296 23.3831 61.536 22.9991 62.016C22.6258 62.496 22.4391 63.1787 22.4391 64.064C22.4391 64.9493 22.6258 65.632 22.9991 66.112C23.3831 66.592 23.9271 66.832 24.6311 66.832ZM34.3723 60.032C34.8843 60 35.1403 60.2187 35.1403 60.688C35.1403 60.9227 35.0816 61.0987 34.9643 61.216C34.8469 61.3333 34.6443 61.4027 34.3563 61.424L33.8763 61.472C33.2043 61.536 32.7029 61.7707 32.3723 62.176C32.0523 62.5813 31.8923 63.072 31.8923 63.648V67.312C31.8923 67.568 31.8176 67.76 31.6683 67.888C31.5189 68.016 31.3269 68.08 31.0923 68.08C30.8576 68.08 30.6603 68.016 30.5003 67.888C30.3509 67.76 30.2763 67.568 30.2763 67.312V60.8C30.2763 60.5547 30.3509 60.368 30.5003 60.24C30.6603 60.1013 30.8576 60.032 31.0923 60.032C31.3056 60.032 31.4816 60.1013 31.6203 60.24C31.7696 60.368 31.8443 60.5493 31.8443 60.784V61.552C32.0576 61.0827 32.3669 60.7253 32.7723 60.48C33.1776 60.2347 33.6363 60.0907 34.1483 60.048L34.3723 60.032ZM39.3688 60C40.4034 60 41.1714 60.2613 41.6728 60.784C42.1848 61.3067 42.4408 62.1013 42.4408 63.168V67.312C42.4408 67.5573 42.3714 67.7493 42.2328 67.888C42.0941 68.016 41.9021 68.08 41.6568 68.08C41.4221 68.08 41.2354 68.0107 41.0968 67.872C40.9581 67.7333 40.8888 67.5467 40.8888 67.312V66.72C40.6861 67.168 40.3821 67.5147 39.9768 67.76C39.5821 67.9947 39.1181 68.112 38.5848 68.112C38.0728 68.112 37.6034 68.0107 37.1768 67.808C36.7608 67.5947 36.4301 67.3067 36.1848 66.944C35.9394 66.5813 35.8168 66.1707 35.8168 65.712C35.8061 65.136 35.9501 64.688 36.2488 64.368C36.5474 64.0373 37.0328 63.8027 37.7048 63.664C38.3768 63.5147 39.3101 63.44 40.5048 63.44H40.8728V62.976C40.8728 62.3787 40.7501 61.9467 40.5048 61.68C40.2594 61.4133 39.8648 61.28 39.3208 61.28C38.9474 61.28 38.5954 61.328 38.2648 61.424C37.9341 61.52 37.5714 61.6587 37.1768 61.84C36.8888 62 36.6861 62.08 36.5688 62.08C36.4088 62.08 36.2754 62.0213 36.1688 61.904C36.0728 61.7867 36.0247 61.6373 36.0247 61.456C36.0247 61.296 36.0674 61.1573 36.1528 61.04C36.2488 60.912 36.3981 60.7893 36.6008 60.672C36.9741 60.4693 37.4114 60.3093 37.9128 60.192C38.4141 60.064 38.8994 60 39.3688 60ZM38.8728 66.912C39.4594 66.912 39.9394 66.7147 40.3128 66.32C40.6861 65.9147 40.8728 65.3973 40.8728 64.768V64.352H40.5848C39.7528 64.352 39.1128 64.3893 38.6648 64.464C38.2168 64.5387 37.8968 64.6667 37.7048 64.848C37.5128 65.0187 37.4168 65.2693 37.4168 65.6C37.4168 65.984 37.5554 66.2987 37.8328 66.544C38.1101 66.7893 38.4568 66.912 38.8728 66.912ZM48.8593 60C50.7259 60 51.6593 61.0507 51.6593 63.152V67.312C51.6593 67.5573 51.5846 67.7493 51.4353 67.888C51.2966 68.016 51.0993 68.08 50.8433 68.08C50.5979 68.08 50.4006 68.0107 50.2513 67.872C50.1126 67.7333 50.0433 67.5467 50.0433 67.312V63.232C50.0433 62.5707 49.9099 62.0853 49.6433 61.776C49.3873 61.4667 48.9819 61.312 48.4273 61.312C47.7766 61.312 47.2539 61.5147 46.8593 61.92C46.4646 62.3253 46.2673 62.8693 46.2673 63.552V67.312C46.2673 67.5467 46.1926 67.7333 46.0433 67.872C45.9046 68.0107 45.7126 68.08 45.4673 68.08C45.2219 68.08 45.0246 68.0107 44.8753 67.872C44.7259 67.7333 44.6513 67.5467 44.6513 67.312V60.8C44.6513 60.576 44.7259 60.3947 44.8753 60.256C45.0353 60.1067 45.2326 60.032 45.4673 60.032C45.7019 60.032 45.8886 60.1013 46.0273 60.24C46.1659 60.3787 46.2353 60.56 46.2353 60.784V61.44C46.4913 60.9707 46.8486 60.6133 47.3073 60.368C47.7659 60.1227 48.2833 60 48.8593 60ZM59.646 66.016C59.7953 66.016 59.918 66.08 60.014 66.208C60.11 66.3253 60.158 66.4747 60.158 66.656C60.158 66.8053 60.1153 66.944 60.03 67.072C59.9553 67.1893 59.822 67.312 59.63 67.44C59.3527 67.6213 59.0327 67.7707 58.67 67.888C58.3073 68.0053 57.9393 68.0747 57.566 68.096L57.486 68.704C57.6353 68.672 57.7687 68.656 57.886 68.656C58.2167 68.656 58.494 68.752 58.718 68.944C58.9527 69.136 59.07 69.408 59.07 69.76C59.07 70.1547 58.8993 70.4747 58.558 70.72C58.2167 70.976 57.7313 71.104 57.102 71.104C56.686 71.104 56.318 71.0453 55.998 70.928C55.806 70.8533 55.71 70.72 55.71 70.528C55.71 70.4 55.7527 70.2933 55.838 70.208C55.934 70.1227 56.0567 70.1013 56.206 70.144C56.526 70.2293 56.8247 70.272 57.102 70.272C57.3793 70.272 57.5927 70.2293 57.742 70.144C57.8913 70.0587 57.966 69.9307 57.966 69.76C57.966 69.632 57.9233 69.5307 57.838 69.456C57.7633 69.392 57.6513 69.36 57.502 69.36C57.3953 69.36 57.2513 69.3813 57.07 69.424C56.8887 69.4667 56.7767 69.488 56.734 69.488C56.6487 69.488 56.5687 69.456 56.494 69.392C56.43 69.3387 56.4033 69.264 56.414 69.168L56.542 68.064C55.582 67.9147 54.8193 67.488 54.254 66.784C53.6993 66.08 53.422 65.184 53.422 64.096C53.422 63.2853 53.582 62.5707 53.902 61.952C54.2327 61.3333 54.6913 60.8533 55.278 60.512C55.8647 60.1707 56.5367 60 57.294 60C57.6993 60 58.1047 60.0587 58.51 60.176C58.926 60.2933 59.294 60.4533 59.614 60.656C59.9553 60.8907 60.126 61.1627 60.126 61.472C60.126 61.6533 60.078 61.808 59.982 61.936C59.886 62.0533 59.7633 62.112 59.614 62.112C59.518 62.112 59.422 62.0907 59.326 62.048C59.23 61.9947 59.1073 61.92 58.958 61.824C58.6913 61.6533 58.4407 61.5253 58.206 61.44C57.982 61.344 57.71 61.296 57.39 61.296C56.6647 61.296 56.0993 61.5413 55.694 62.032C55.2993 62.5227 55.102 63.2053 55.102 64.08C55.102 64.9547 55.2993 65.632 55.694 66.112C56.0887 66.5813 56.6487 66.816 57.374 66.816C57.694 66.816 57.9767 66.768 58.222 66.672C58.4673 66.576 58.718 66.448 58.974 66.288C59.0913 66.2133 59.2087 66.1493 59.326 66.096C59.4433 66.0427 59.55 66.016 59.646 66.016ZM64.8844 60C65.919 60 66.687 60.2613 67.1884 60.784C67.7004 61.3067 67.9564 62.1013 67.9564 63.168V67.312C67.9564 67.5573 67.887 67.7493 67.7484 67.888C67.6097 68.016 67.4177 68.08 67.1724 68.08C66.9377 68.08 66.751 68.0107 66.6124 67.872C66.4737 67.7333 66.4044 67.5467 66.4044 67.312V66.72C66.2017 67.168 65.8977 67.5147 65.4924 67.76C65.0977 67.9947 64.6337 68.112 64.1004 68.112C63.5884 68.112 63.119 68.0107 62.6924 67.808C62.2764 67.5947 61.9457 67.3067 61.7004 66.944C61.455 66.5813 61.3324 66.1707 61.3324 65.712C61.3217 65.136 61.4657 64.688 61.7644 64.368C62.063 64.0373 62.5484 63.8027 63.2204 63.664C63.8924 63.5147 64.8257 63.44 66.0204 63.44H66.3884V62.976C66.3884 62.3787 66.2657 61.9467 66.0204 61.68C65.775 61.4133 65.3804 61.28 64.8364 61.28C64.463 61.28 64.111 61.328 63.7804 61.424C63.4497 61.52 63.087 61.6587 62.6924 61.84C62.4044 62 62.2017 62.08 62.0844 62.08C61.9244 62.08 61.791 62.0213 61.6844 61.904C61.5884 61.7867 61.5404 61.6373 61.5404 61.456C61.5404 61.296 61.583 61.1573 61.6684 61.04C61.7644 60.912 61.9137 60.7893 62.1164 60.672C62.4897 60.4693 62.927 60.3093 63.4284 60.192C63.9297 60.064 64.415 60 64.8844 60ZM64.3884 66.912C64.975 66.912 65.455 66.7147 65.8284 66.32C66.2017 65.9147 66.3884 65.3973 66.3884 64.768V64.352H66.1004C65.2684 64.352 64.6284 64.3893 64.1804 64.464C63.7324 64.5387 63.4124 64.6667 63.2204 64.848C63.0284 65.0187 62.9324 65.2693 62.9324 65.6C62.9324 65.984 63.071 66.2987 63.3484 66.544C63.6257 66.7893 63.9724 66.912 64.3884 66.912ZM72.8869 68.112C71.7989 68.112 70.9082 67.888 70.2149 67.44C70.0229 67.3227 69.8842 67.2 69.7989 67.072C69.7242 66.944 69.6869 66.8 69.6869 66.64C69.6869 66.4693 69.7349 66.3253 69.8309 66.208C69.9269 66.0907 70.0495 66.032 70.1989 66.032C70.3375 66.032 70.5562 66.1173 70.8549 66.288C71.1749 66.4587 71.4842 66.5973 71.7829 66.704C72.0922 66.8107 72.4762 66.864 72.9349 66.864C73.4469 66.864 73.8469 66.7733 74.1349 66.592C74.4229 66.4107 74.5669 66.1547 74.5669 65.824C74.5669 65.6107 74.5082 65.44 74.3909 65.312C74.2842 65.184 74.0922 65.072 73.8149 64.976C73.5375 64.8693 73.1269 64.7573 72.5829 64.64C71.6442 64.4373 70.9669 64.1653 70.5509 63.824C70.1455 63.472 69.9429 62.9973 69.9429 62.4C69.9429 61.9413 70.0762 61.5307 70.3429 61.168C70.6095 60.7947 70.9775 60.5067 71.4469 60.304C71.9162 60.1013 72.4495 60 73.0469 60C73.4735 60 73.8895 60.0587 74.2949 60.176C74.7002 60.2827 75.0575 60.4427 75.3669 60.656C75.7189 60.8907 75.8949 61.1627 75.8949 61.472C75.8949 61.6427 75.8415 61.7867 75.7349 61.904C75.6389 62.0213 75.5215 62.08 75.3829 62.08C75.2869 62.08 75.1909 62.0587 75.0949 62.016C74.9989 61.9733 74.8709 61.904 74.7109 61.808C74.4229 61.6373 74.1509 61.504 73.8949 61.408C73.6495 61.312 73.3402 61.264 72.9669 61.264C72.5189 61.264 72.1562 61.36 71.8789 61.552C71.6122 61.744 71.4789 62.0053 71.4789 62.336C71.4789 62.6347 71.6015 62.8693 71.8469 63.04C72.1029 63.2 72.5775 63.3547 73.2709 63.504C73.9855 63.6533 74.5455 63.824 74.9509 64.016C75.3562 64.208 75.6442 64.448 75.8149 64.736C75.9962 65.0133 76.0869 65.3707 76.0869 65.808C76.0869 66.5013 75.7935 67.0613 75.2069 67.488C74.6309 67.904 73.8575 68.112 72.8869 68.112Z"
        fill={sessionStorage.getItem("page") === "charges" ? pink : grey}
      />
    </svg>
  );

  const ClientsIcon = () => (
    <svg
      cursor={"pointer"}
      onClick={handleColorClient}
      width="48"
      height="48"
      viewBox="0 0 59 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.0638 38.5H31.937C33.066 38.5 33.9544 37.5634 33.7294 36.457C33.1084 33.4024 31.0798 28 24.5004 28C17.921 28 15.8925 33.4024 15.2714 36.457C15.0464 37.5634 15.9348 38.5 17.0638 38.5Z"
        stroke={sessionStorage.getItem("page") === "clients" ? pink : grey}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 28C41.1576 28 42.8604 32.2958 43.5478 35.392C43.919 37.064 42.5666 38.5 40.8538 38.5H39"
        stroke={sessionStorage.getItem("page") === "clients" ? pink : grey}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 20.5C27.5376 20.5 30 18.0376 30 15C30 11.9624 27.5376 9.5 24.5 9.5C21.4624 9.5 19 11.9624 19 15C19 18.0376 21.4624 20.5 24.5 20.5Z"
        stroke={sessionStorage.getItem("page") === "clients" ? pink : grey}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 20.5C38.0376 20.5 40 18.0376 40 15C40 11.9624 38.0376 9.5 35 9.5"
        stroke={sessionStorage.getItem("page") === "clients" ? pink : grey}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.224 68.128C5.14667 68.128 4.208 67.8987 3.408 67.44C2.608 66.9707 1.99467 66.304 1.568 65.44C1.14133 64.5653 0.928 63.536 0.928 62.352C0.928 61.1787 1.14133 60.16 1.568 59.296C1.99467 58.4213 2.608 57.7547 3.408 57.296C4.208 56.8267 5.14667 56.592 6.224 56.592C6.928 56.592 7.59467 56.704 8.224 56.928C8.85333 57.1413 9.40267 57.456 9.872 57.872C10.0747 58.032 10.176 58.2453 10.176 58.512C10.176 58.704 10.1227 58.8693 10.016 59.008C9.90933 59.136 9.78133 59.2 9.632 59.2C9.45067 59.2 9.27467 59.1307 9.104 58.992C8.592 58.608 8.12267 58.3413 7.696 58.192C7.28 58.032 6.80533 57.952 6.272 57.952C5.09867 57.952 4.19733 58.3307 3.568 59.088C2.93867 59.8453 2.624 60.9333 2.624 62.352C2.624 63.7813 2.93867 64.8747 3.568 65.632C4.19733 66.3893 5.09867 66.768 6.272 66.768C6.784 66.768 7.248 66.688 7.664 66.528C8.09067 66.368 8.57067 66.1013 9.104 65.728C9.31733 65.5893 9.49333 65.52 9.632 65.52C9.78133 65.52 9.90933 65.5893 10.016 65.728C10.1227 65.856 10.176 66.016 10.176 66.208C10.176 66.4747 10.0747 66.688 9.872 66.848C9.40267 67.264 8.85333 67.584 8.224 67.808C7.59467 68.0213 6.928 68.128 6.224 68.128ZM12.7641 68.08C12.5295 68.08 12.3321 68.016 12.1721 67.888C12.0228 67.76 11.9481 67.568 11.9481 67.312V57.424C11.9481 57.168 12.0228 56.976 12.1721 56.848C12.3321 56.7093 12.5295 56.64 12.7641 56.64C12.9988 56.64 13.1908 56.7093 13.3401 56.848C13.4895 56.976 13.5641 57.168 13.5641 57.424V67.312C13.5641 67.568 13.4895 67.76 13.3401 67.888C13.1908 68.016 12.9988 68.08 12.7641 68.08ZM16.6391 68.08C16.4045 68.08 16.2071 68.016 16.0471 67.888C15.8978 67.76 15.8231 67.568 15.8231 67.312V60.816C15.8231 60.56 15.8978 60.368 16.0471 60.24C16.2071 60.1013 16.4045 60.032 16.6391 60.032C16.8738 60.032 17.0658 60.1013 17.2151 60.24C17.3645 60.368 17.4391 60.56 17.4391 60.816V67.312C17.4391 67.568 17.3645 67.76 17.2151 67.888C17.0658 68.016 16.8738 68.08 16.6391 68.08ZM16.6391 58.464C16.3298 58.464 16.0845 58.3787 15.9031 58.208C15.7218 58.0373 15.6311 57.8133 15.6311 57.536C15.6311 57.2587 15.7218 57.04 15.9031 56.88C16.0845 56.7093 16.3298 56.624 16.6391 56.624C16.9378 56.624 17.1778 56.7093 17.3591 56.88C17.5511 57.04 17.6471 57.2587 17.6471 57.536C17.6471 57.8133 17.5565 58.0373 17.3751 58.208C17.1938 58.3787 16.9485 58.464 16.6391 58.464ZM25.8101 66.032C25.9595 66.032 26.0821 66.0907 26.1781 66.208C26.2741 66.3253 26.3221 66.4747 26.3221 66.656C26.3221 66.9653 26.1301 67.2267 25.7461 67.44C25.3728 67.6533 24.9621 67.8187 24.5141 67.936C24.0768 68.0533 23.6555 68.112 23.2501 68.112C22.0128 68.112 21.0368 67.7547 20.3221 67.04C19.6075 66.3147 19.2501 65.328 19.2501 64.08C19.2501 63.28 19.4048 62.5707 19.7141 61.952C20.0341 61.3333 20.4768 60.8533 21.0421 60.512C21.6181 60.1707 22.2688 60 22.9941 60C24.0395 60 24.8661 60.336 25.4741 61.008C26.0821 61.68 26.3861 62.5867 26.3861 63.728C26.3861 64.1547 26.1941 64.368 25.8101 64.368H20.8661C20.9728 66.0213 21.7675 66.848 23.2501 66.848C23.6448 66.848 23.9861 66.7947 24.2741 66.688C24.5621 66.5813 24.8661 66.4427 25.1861 66.272C25.2181 66.2507 25.3035 66.208 25.4421 66.144C25.5915 66.0693 25.7141 66.032 25.8101 66.032ZM23.0261 61.184C22.4075 61.184 21.9115 61.3813 21.5381 61.776C21.1648 62.1707 20.9408 62.7253 20.8661 63.44H24.9941C24.9621 62.7147 24.7755 62.16 24.4341 61.776C24.1035 61.3813 23.6341 61.184 23.0261 61.184ZM32.3749 60C34.2415 60 35.1749 61.0507 35.1749 63.152V67.312C35.1749 67.5573 35.1002 67.7493 34.9509 67.888C34.8122 68.016 34.6149 68.08 34.3589 68.08C34.1135 68.08 33.9162 68.0107 33.7669 67.872C33.6282 67.7333 33.5589 67.5467 33.5589 67.312V63.232C33.5589 62.5707 33.4255 62.0853 33.1589 61.776C32.9029 61.4667 32.4975 61.312 31.9429 61.312C31.2922 61.312 30.7695 61.5147 30.3749 61.92C29.9802 62.3253 29.7829 62.8693 29.7829 63.552V67.312C29.7829 67.5467 29.7082 67.7333 29.5589 67.872C29.4202 68.0107 29.2282 68.08 28.9829 68.08C28.7375 68.08 28.5402 68.0107 28.3909 67.872C28.2415 67.7333 28.1669 67.5467 28.1669 67.312V60.8C28.1669 60.576 28.2415 60.3947 28.3909 60.256C28.5509 60.1067 28.7482 60.032 28.9829 60.032C29.2175 60.032 29.4042 60.1013 29.5429 60.24C29.6815 60.3787 29.7509 60.56 29.7509 60.784V61.44C30.0069 60.9707 30.3642 60.6133 30.8229 60.368C31.2815 60.1227 31.7989 60 32.3749 60ZM41.2096 66.848C41.4443 66.8693 41.6096 66.9333 41.7056 67.04C41.8123 67.136 41.8656 67.2747 41.8656 67.456C41.8656 67.6693 41.7803 67.8347 41.6096 67.952C41.4496 68.0587 41.2096 68.1013 40.8896 68.08L40.4576 68.048C39.5936 67.984 38.9483 67.7227 38.5216 67.264C38.095 66.7947 37.8816 66.1067 37.8816 65.2V61.44H36.9216C36.4523 61.44 36.2176 61.232 36.2176 60.816C36.2176 60.624 36.2763 60.4747 36.3936 60.368C36.5216 60.2507 36.6976 60.192 36.9216 60.192H37.8816V58.544C37.8816 58.2987 37.951 58.1067 38.0896 57.968C38.239 57.8293 38.4363 57.76 38.6816 57.76C38.927 57.76 39.1243 57.8293 39.2736 57.968C39.423 58.1067 39.4976 58.2987 39.4976 58.544V60.192H41.0816C41.3056 60.192 41.4763 60.2507 41.5936 60.368C41.7216 60.4747 41.7856 60.624 41.7856 60.816C41.7856 61.0187 41.7216 61.1733 41.5936 61.28C41.4763 61.3867 41.3056 61.44 41.0816 61.44H39.4976V65.312C39.4976 65.8133 39.599 66.1813 39.8016 66.416C40.015 66.6507 40.335 66.784 40.7616 66.816L41.2096 66.848ZM49.1383 66.032C49.2876 66.032 49.4103 66.0907 49.5063 66.208C49.6023 66.3253 49.6503 66.4747 49.6503 66.656C49.6503 66.9653 49.4583 67.2267 49.0743 67.44C48.7009 67.6533 48.2903 67.8187 47.8423 67.936C47.4049 68.0533 46.9836 68.112 46.5783 68.112C45.3409 68.112 44.3649 67.7547 43.6503 67.04C42.9356 66.3147 42.5783 65.328 42.5783 64.08C42.5783 63.28 42.7329 62.5707 43.0423 61.952C43.3623 61.3333 43.8049 60.8533 44.3703 60.512C44.9463 60.1707 45.5969 60 46.3223 60C47.3676 60 48.1943 60.336 48.8023 61.008C49.4103 61.68 49.7143 62.5867 49.7143 63.728C49.7143 64.1547 49.5223 64.368 49.1383 64.368H44.1943C44.3009 66.0213 45.0956 66.848 46.5783 66.848C46.9729 66.848 47.3143 66.7947 47.6023 66.688C47.8903 66.5813 48.1943 66.4427 48.5143 66.272C48.5463 66.2507 48.6316 66.208 48.7703 66.144C48.9196 66.0693 49.0423 66.032 49.1383 66.032ZM46.3543 61.184C45.7356 61.184 45.2396 61.3813 44.8663 61.776C44.4929 62.1707 44.2689 62.7253 44.1943 63.44H48.3223C48.2903 62.7147 48.1036 62.16 47.7623 61.776C47.4316 61.3813 46.9623 61.184 46.3543 61.184ZM54.215 68.112C53.127 68.112 52.2363 67.888 51.543 67.44C51.351 67.3227 51.2123 67.2 51.127 67.072C51.0523 66.944 51.015 66.8 51.015 66.64C51.015 66.4693 51.063 66.3253 51.159 66.208C51.255 66.0907 51.3777 66.032 51.527 66.032C51.6657 66.032 51.8843 66.1173 52.183 66.288C52.503 66.4587 52.8123 66.5973 53.111 66.704C53.4203 66.8107 53.8043 66.864 54.263 66.864C54.775 66.864 55.175 66.7733 55.463 66.592C55.751 66.4107 55.895 66.1547 55.895 65.824C55.895 65.6107 55.8363 65.44 55.719 65.312C55.6123 65.184 55.4203 65.072 55.143 64.976C54.8657 64.8693 54.455 64.7573 53.911 64.64C52.9723 64.4373 52.295 64.1653 51.879 63.824C51.4737 63.472 51.271 62.9973 51.271 62.4C51.271 61.9413 51.4043 61.5307 51.671 61.168C51.9377 60.7947 52.3057 60.5067 52.775 60.304C53.2443 60.1013 53.7777 60 54.375 60C54.8017 60 55.2177 60.0587 55.623 60.176C56.0283 60.2827 56.3857 60.4427 56.695 60.656C57.047 60.8907 57.223 61.1627 57.223 61.472C57.223 61.6427 57.1697 61.7867 57.063 61.904C56.967 62.0213 56.8497 62.08 56.711 62.08C56.615 62.08 56.519 62.0587 56.423 62.016C56.327 61.9733 56.199 61.904 56.039 61.808C55.751 61.6373 55.479 61.504 55.223 61.408C54.9777 61.312 54.6683 61.264 54.295 61.264C53.847 61.264 53.4843 61.36 53.207 61.552C52.9403 61.744 52.807 62.0053 52.807 62.336C52.807 62.6347 52.9297 62.8693 53.175 63.04C53.431 63.2 53.9057 63.3547 54.599 63.504C55.3137 63.6533 55.8737 63.824 56.279 64.016C56.6843 64.208 56.9723 64.448 57.143 64.736C57.3243 65.0133 57.415 65.3707 57.415 65.808C57.415 66.5013 57.1217 67.0613 56.535 67.488C55.959 67.904 55.1857 68.112 54.215 68.112Z"
        fill={sessionStorage.getItem("page") === "clients" ? pink : grey}
      />
    </svg>
  );

  const homeIconBar = {
    borderRight:
      sessionStorage.getItem("page") === "home" ||
      sessionStorage.getItem("page") == ""
        ? "2px solid #DA0175"
        : "none",
  };

  const clientsIconBar = {
    borderRight:
      sessionStorage.getItem("page") === "clients"
        ? "2px solid #DA0175"
        : "none",
  };

  const chargerIconBar = {
    borderRight:
      sessionStorage.getItem("page") === "charges"
        ? "2px solid #DA0175"
        : "none",
  };

  return (
    <>
      <div className="container-nav">
        <div className="icon" style={homeIconBar}>
          <HomeIcon />
        </div>

        <div className="icon" style={clientsIconBar}>
          <ClientsIcon />
        </div>

        <div className="icon" style={chargerIconBar}>
          <ChargeIcon />
        </div>
      </div>
    </>
  );
}

export default Navbar;