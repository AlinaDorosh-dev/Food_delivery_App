import UserRoom from "./components/UserRoom"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "User room",
  description: "User page",
};


export default function page() {
  return (
    <div className=" min-h-screen min-w-full absolute top-0">
        <UserRoom/>
    </div>
  )
}
