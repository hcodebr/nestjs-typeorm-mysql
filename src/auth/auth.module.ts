import { Module, forwardRef } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { FileModule } from "src/file/file.module";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserEntity } from "src/user/entity/user.entity";

@Module({
    imports: [
        JwtModule.register({
            secret: String(process.env.JWT_SECRET)
        }),
        forwardRef(() => UserModule),
        FileModule,
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule {

}