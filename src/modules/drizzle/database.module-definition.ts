import { ConfigurableModuleBuilder } from '@nestjs/common';
import { DatabaseOptions } from './interfaces/databaseOptions.interface';

export const CONNECTION_POOL = 'CONNECTION_POOL';

export const {
    ConfigurableModuleClass: ConfigurableDatabaseModule,
    MODULE_OPTIONS_TOKEN: DATABASE_OPTIONS,
} = new ConfigurableModuleBuilder<DatabaseOptions>()
    .setClassMethodName('forRoot')
    .build();
