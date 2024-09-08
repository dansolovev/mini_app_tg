import Link from "next/link";

interface Props {
    url: string,
    name: string
}

export default function MyLink({url, name}: Props) {
    return (
        <Link href={url} type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg
                className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M2.59998 0C1.49541 0 0.599976 0.895431 0.599976 2V18C0.599976 19.1046 1.49541 20 2.59998 20H18.6C19.7045 20 20.6 19.1046 20.6 18V2C20.6 0.895431 19.7045 0 18.6 0H2.59998ZM3.24642 3.35355L9.89287 10L3.24642 16.6464L3.95353 17.3536L10.6 10.7071L17.2464 17.3536L17.9535 16.6464L11.3071 10L17.9535 3.35355L17.2464 2.64645L10.6 9.29289L3.95353 2.64645L3.24642 3.35355Z"
                      fill="#A6AFBD"/>
            </svg>
            <span
                className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{name}</span>
        </Link>
    );
}
