import { useCallback, useState } from "react";
import { TError } from "../models/apiResult";


export const useMapValidationMessages = () => {
  const [state, setState] = useState<Array<TError>>([]);

  const loadMessages = useCallback((validationMessages: TError[] | null) => {
    if(!validationMessages) return;
    setState(validationMessages);
  }, [])


  const getMessageByFieldName = useCallback((fieldName: string) => {
    return state.find(x => x.fieldName == fieldName)?.message;
  }, [state]);


  return { getMessageByFieldName, loadMessages };
};