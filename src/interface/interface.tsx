export interface IDefaultCompanyContext {
  companyData: Array<any>;
  setCompanyData: React.SetStateAction<React.Dispatch<Array<any>>>;
  loading: boolean;
  setLoading: React.SetStateAction<React.Dispatch<boolean>>;
}
