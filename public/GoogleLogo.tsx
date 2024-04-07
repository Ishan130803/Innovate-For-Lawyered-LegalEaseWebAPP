import { FC } from "react";
interface IGoogleLogoProps {
  height?:string
  width?:string
};

export const GoogleLogo: FC<IGoogleLogoProps> = ({height = "24px", width = "24px", ...props}) => {
    return (
      <svg width={width} height={height} viewBox={`0 0 {width} {height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.06 12.25C23.06 11.47 22.99 10.72 22.86 10H12.5V14.26H18.42C18.16 15.63 17.38 16.79 16.21 17.57V20.34H19.78C21.86 18.42 23.06 15.6 23.06 12.25Z" fill="#4285F4"/>
      <path d="M12.4999 23C15.4699 23 17.9599 22.02 19.7799 20.34L16.2099 17.57C15.2299 18.23 13.9799 18.63 12.4999 18.63C9.63993 18.63 7.20993 16.7 6.33993 14.1H2.67993V16.94C4.48993 20.53 8.19993 23 12.4999 23Z" fill="#34A853"/>
      <path d="M6.34 14.09C6.12 13.43 5.99 12.73 5.99 12C5.99 11.27 6.12 10.57 6.34 9.91001V7.07001H2.68C1.93 8.55001 1.5 10.22 1.5 12C1.5 13.78 1.93 15.45 2.68 16.93L5.53 14.71L6.34 14.09Z" fill="#FBBC05"/>
      <path d="M12.4999 5.38C14.1199 5.38 15.5599 5.94 16.7099 7.02L19.8599 3.87C17.9499 2.09 15.4699 1 12.4999 1C8.19993 1 4.48993 3.47 2.67993 7.07L6.33993 9.91C7.20993 7.31 9.63993 5.38 12.4999 5.38Z" fill="#EA4335"/>
      </svg>
    );
}