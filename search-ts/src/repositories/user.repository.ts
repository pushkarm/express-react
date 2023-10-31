
import { Op } from "sequelize";
import User from "../models/user.model";

interface IUserRepository {
    save(user: User) : Promise<User>;
    search(searchTerm: string) : Promise<User[]>;
    searchName(searchTerm: string) : Promise<User[]>;
}

interface SearchCondition {
    [key: string]: any;
  }

  
class UserRepository implements IUserRepository {

    async searchName(searchTerm: string): Promise<User[]> {
        try {
            let condition: SearchCondition = {};
            condition.name = { [Op.iLike]: `%${searchTerm}%` };
      
            return await User.findAll({ where: condition });
        } catch (err) {
            console.error(err);
            throw new Error("Failed to retrieve Users.");
        }
    }

    async save(user: User): Promise<User> {
        try {

            return await User.create
            ({
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                address: user.address,
                accountNumber: user.accountNumber
            });

        } catch (err) {
            console.error(err);
            throw new Error("Failed to create user.");        
        }
    }

    async search(searchTerm: string): Promise<User[]> {

        try {
            let whereCondition = {
                [Op.or] : [
                    {
                        name: {
                            [Op.iLike]: `%${searchTerm}%`
                        }
                    },
                    {
                        phoneNumber: {
                            [Op.iLike]: `%${searchTerm}%`
                        }
                    },
                    {
                        accountNumber: {
                            [Op.iLike]: `%${searchTerm}%`
                        }
                    }
                ]
            }
        
            return await User.findAll({ where: whereCondition });
        } catch (err) {
            console.error(err);
            throw new Error("Failed to retrieve Users.");
        }
    }
}

export default new UserRepository();