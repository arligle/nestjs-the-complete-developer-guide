"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.set('etag', false);
    app.use((req, res, next) => {
        res.removeHeader('x-powered-by');
        res.removeHeader('date');
        next();
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map