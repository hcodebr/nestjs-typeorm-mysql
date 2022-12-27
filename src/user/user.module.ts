import { Module, NestModule, MiddlewareConsumer, RequestMethod, forwardRef } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { UserIdCheckMiddleware } from "src/middlewares/user-id-check.middleware";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule} from '@nestjs/typeorm';
import { UserEntity } from "./entity/user.entity";

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule implements NestModule {

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdCheckMiddleware).forRoutes({
            path: 'users/:id',
            method: RequestMethod.ALL
        });
    }

}