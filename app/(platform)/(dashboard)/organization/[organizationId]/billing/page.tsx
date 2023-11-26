import { checkSubscription } from "@/lib/subscription"
import { Separator } from "@/components/ui/separator";

import {
    Alert,
    AlertTitle,
    AlertDescription
} from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import { Info } from "../_components/info";

const BillingPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info />
      <Separator className="my-2 mb-4" />
      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
            The billing functionality is coming soon!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default BillingPage;