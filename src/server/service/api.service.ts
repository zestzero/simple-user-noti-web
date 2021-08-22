import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

interface EnvironmentVariables {
    GATEWAY_API_HOST: string;
    GATEWAY_API_PORT: number;
}

interface ServiceInfo {
    host: string;
    port: number;
}

@Injectable()
export class ApiConfigService {
    constructor(private configService: ConfigService<EnvironmentVariables>) { }

    public getGatewayConfigs = (): ServiceInfo => {
        return {
            host: this.configService.get("GATEWAY_API_HOST"),
            port: this.configService.get("GATEWAY_API_PORT"),
        };
    };
}
