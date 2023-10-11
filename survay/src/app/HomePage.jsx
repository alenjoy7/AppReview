import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Loader from "@/components/loaders/Loader";
import { useMutation } from "@tanstack/react-query";
import SurvayForm from "@/components/form/SurvayForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { addSurvay } from "@/security/services/vendorService";
import { survayFormSchema } from "@/utils/formSchema/FormSchema";
import { queryClient } from "@/main";

/**
 * home page to take survay
 * @returns home page
 */
const HomePage = () => {
  const navigate = useNavigate();
  /**
   * use form to handle form
   */
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
  /**
   * react query to manage data-fetching and caching
   */
  const { mutateAsync, isLoading, isError, error } = useMutation({
    mutationFn: addSurvay,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["survayResult"] });
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  /**
   * func to handle submition of form data
   * @param {*} data
   */
  const onSubmit = async (data) => {
    await mutateAsync(data);
    navigate("/result");
  };
  return (
    <div className="max-sm:px-3">
      {isError && (
        <p className="text-sm font-medium text-destructive p-2 bg-primary-foreground">
          {error.response.data.message}
        </p>
      )}
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
