import Loader from "@/components/loaders/Loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getSurvayResult } from "@/security/services/vendorService";
import { sliderVariation } from "@/utils/data/data";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["survayResult"],
    queryFn: getSurvayResult,
  });
  const navigate = useNavigate();
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const handleIndexBasedModification = (index, answer) => {
    switch (index) {
      case 1:
        return answer.join(", ");
      case 2:
        return sliderVariation[answer[0]];
      case 4:
        return new Date(answer).toDateString();
      default:
        return answer;
    }
  };

  return (
    <div className="max-sm:px-3">
      <h1 className="flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-8">
        App Review
      </h1>
      <div className="flex justify-center">
        <div>
          <Card className="lg:w-96 mb-14 flex justify-center">
            <CardContent className=" py-10">
              {data.length === 0
                ? "NO SURVAY DATA FOUND"
                : data.map((item, index) => (
                    <div key={item.question}>
                      <span className="font-bold">
                        {Number(index) + 1 + ") "}
                        {item?.question}
                      </span>
                      <div className="text-primary">
                        {handleIndexBasedModification(index, item.answer)}
                      </div>
                    </div>
                  ))}
            </CardContent>
          </Card>
          <Button className="w-full" onClick={() => navigate("/")}>
            Take new Survay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
