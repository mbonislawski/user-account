import axios                            from "axios";
import { IUserAccountResponse }         from "@/interfaces/IUserAccountResponse";
import { IUserAccount }                 from "@/interfaces/IUserAccount";

const resource = "/";

const apiUserAccount = () => ({
    set( data: IUserAccount ): Promise<IUserAccountResponse> {
        return axios.post( resource, {
            data
        } );
    }
});

export default apiUserAccount;
