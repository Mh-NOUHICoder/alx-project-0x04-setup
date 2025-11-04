import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import { PageRouteProps } from "@/interface";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch, AppDispatch, increment, decrement } from "@/store/store";

export default function Home() {
  const router = useRouter();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useAppDispatch();

  // Imperative routing with useRouter
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false })
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center  text-foreground">
      
      
      {/* Welcome Message */}
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Splash App!
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Your one-stop platform for everything AI you need. Start exploring by
        navigating to our features below.
      </p>

      {/* Navigation Options */}
      <div className="flex gap-6 mb-6">
        <Button 
          action={() => routeToNextPage({ pageRoute: '/generate-text-ai' })} 
          buttonLabel="Generate Text" 
          buttonBackgroundColor="blue" 
        />
        <Button 
          action={() => routeToNextPage({ pageRoute: '/text-to-image'})} 
          buttonLabel="Text to Image" 
          buttonBackgroundColor="green" 
        />
        <Button 
          action={() => routeToNextPage({ pageRoute: '/counter-app'})} 
          buttonLabel="Counter App" 
          buttonBackgroundColor="orange"
        />
        <Button 
          action={() => routeToNextPage({ pageRoute: '/test-shadcn-d'})} 
          buttonLabel="Test Dark Mode" 
          buttonBackgroundColor="purple"
        />
      </div>
      <div className="flex gap-6">
        <button
                  onClick={() => dispatch(increment())}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
                >
                  Increment 🚀
                </button>
                <button
                  onClick={() => dispatch(decrement())}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
                >
                  Decrement 👎
                </button>
      </div>
    </div>
  );
}