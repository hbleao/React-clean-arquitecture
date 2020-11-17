import { ValidationComposite } from "@/validation/validators";
import { ValidationBuilder } from "@/validation/validators/builder/validation-builder";

export const makeLoginValidation = (): ValidationComposite => {
  return ValidationComposite.build([
    ...ValidationBuilder.field('email').email().require().build(),
    ...ValidationBuilder.field('password').min(5).require().build()
  ]);
};
