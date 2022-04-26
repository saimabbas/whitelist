import React from "react";

const WalletIcon = (props) => {
  return (
    <svg
      className={props.className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0648 4.90439V8.70439H13.5648V4.90439C13.5648 4.63439 13.3248 4.50439 13.1648 4.50439C13.1148 4.50439 13.0648 4.51439 13.0148 4.53439L5.08484 7.52439C4.55484 7.72439 4.21484 8.22439 4.21484 8.79439V9.46439C3.30484 10.1444 2.71484 11.2344 2.71484 12.4644V8.79439C2.71484 7.60439 3.44484 6.54439 4.55484 6.12439L12.4948 3.12439C12.7148 3.04439 12.9448 3.00439 13.1648 3.00439C14.1648 3.00439 15.0648 3.81439 15.0648 4.90439Z"
        fill={props.color}
      />
      <path
        d="M21.7145 15.4546V16.4546C21.7145 16.7246 21.5045 16.9446 21.2245 16.9546H19.7645C19.2345 16.9546 18.7545 16.5646 18.7145 16.0446C18.6845 15.7346 18.8045 15.4446 19.0045 15.2446C19.1845 15.0546 19.4345 14.9546 19.7045 14.9546H21.2145C21.5045 14.9646 21.7145 15.1846 21.7145 15.4546Z"
        fill={props.color}
      />
      <path
        d="M19.6948 13.9046H20.7148C21.2648 13.9046 21.7148 13.4546 21.7148 12.9046V12.4646C21.7148 10.3946 20.0248 8.70459 17.9548 8.70459H6.47484C5.62484 8.70459 4.84484 8.98459 4.21484 9.46459C3.30484 10.1446 2.71484 11.2346 2.71484 12.4646V19.1946C2.71484 21.2646 4.40484 22.9546 6.47484 22.9546H17.9548C20.0248 22.9546 21.7148 21.2646 21.7148 19.1946V19.0046C21.7148 18.4546 21.2648 18.0046 20.7148 18.0046H19.8448C18.8848 18.0046 17.9648 17.4146 17.7148 16.4846C17.5048 15.7246 17.7548 14.9946 18.2548 14.5046C18.6248 14.1246 19.1348 13.9046 19.6948 13.9046ZM14.2148 13.7046H7.21484C6.80484 13.7046 6.46484 13.3646 6.46484 12.9546C6.46484 12.5446 6.80484 12.2046 7.21484 12.2046H14.2148C14.6248 12.2046 14.9648 12.5446 14.9648 12.9546C14.9648 13.3646 14.6248 13.7046 14.2148 13.7046Z"
        fill={props.color}
      />
    </svg>
  );
};

export default WalletIcon;
