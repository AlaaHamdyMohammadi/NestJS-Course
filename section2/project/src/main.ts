import { Controller, Get, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController{
    @Get()
    getRootRoute(){
        return 'Hi There'
    }
}

@Module({
    controllers: [AppController]
})
class AppModule{

}

async function bootstrap(){
    const app = await NestFactory.create(AppModule);

    await app.listen(5000);
}
bootstrap();