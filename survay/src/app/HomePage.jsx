import SurvayForm from "@/components/form/SurvayForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { survayFormSchema } from "@/utils/formSchema/FormSchema";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addSurvay } from "@/security/services/vendorService";
import Loader from "@/components/loaders/Loader";
const HomePage = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(survayFormSchema),
    defaultValues: {
      question1: "",
      question2: [],
      question3: [8],
      question4: "",
      question5: new Date(),
    },
  });
  const { mutateAsync, isLoading, isError, error } = useMutation({
    mutationFn: addSurvay,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const onSubmit = async (data) => {
    const date = new Date(data.question5);
    const formattedDate = date.toISOString().split("T")[0];
    data.question5 = formattedDate;
    await mutateAsync(data);
    navigate("/result");
  };
  return (
    <div className="max-sm:px-3">
      <h1 className="flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 mt-2">
        App Review
      </h1>
      <div className="flex justify-center">
        <div className="w-80 mb-14">
          <Card>
            <CardContent className="pt-3">
              <SurvayForm form={form} onSubmit={onSubmit} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
