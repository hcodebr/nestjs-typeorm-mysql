import { Role } from '../enums/role.enum';
import { UpdatePatchUserDTO } from '../user/dto/update-patch-user.dto';

export const updatePatchUserDTO: UpdatePatchUserDTO = {
  role: Role.Admin,
};
