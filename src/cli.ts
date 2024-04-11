import { CommandFactory } from 'nest-commander';

import { TasksModule } from './tasks/tasks.module';

async function bootstrap() {
  await CommandFactory.run(TasksModule, ['log', 'debug', 'warn', 'error']);
}

bootstrap();
