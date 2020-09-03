import { Module } from '@nestjs/common';
import { DataEventProvider } from './data-event-provider';
import { DataEventConsumer } from './data-event-consumer';

@Module({
  providers: [DataEventProvider, DataEventConsumer]
})
export class DataEventModule {
  constructor(private readonly dataEventConsumer: DataEventConsumer) {
    console.log(`creating DataEventModule`)
  }
  async onModuleInit(): Promise<void> {
    console.log('onModuleInit');
   await this.dataEventConsumer.subscribe();
    //   this.client.('my-new-topic');
    // await this.client.connect();
  }
}
