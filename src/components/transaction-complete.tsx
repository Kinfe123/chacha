
import Link from "next/link"

export function TransactionComplete() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <CheckIcon className="h-20 w-20 text-green-500" />
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Transaction Successful</h1>
        <p className="mx-auto max-w-[400px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Thank you for your purchase. Your order will be processed and shipped within 2 business days.
        </p>
      </div>
      <div className="w-full max-w-sm space-y-2">
        <dl className="grid gap-2 text-sm md:grid-cols-2 md:gap-1 md:text-base lg:gap-2">
          <div className="font-medium">Transaction ID</div>
          <div className="text-gray-500 dark:text-gray-400">TRX9876543210</div>
          <div className="font-medium">Date & Time</div>
          <div className="text-gray-500 dark:text-gray-400">June 23, 2022, 10:30 AM</div>
          <div className="font-medium">Amount</div>
          <div className="text-gray-500 dark:text-gray-400">$99.00</div>
        </dl>
      </div>
      <Link
        className="flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="#"
      >
        Go to Dashboard
      </Link>
    </div>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
