import { Test, TestingModule } from '@nestjs/testing';
import { DataEventConsumer } from './data-event-consumer';

describe('DataEventConsumer', () => {
  let provider: DataEventConsumer;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataEventConsumer],
    }).compile();

    provider = module.get<DataEventConsumer>(DataEventConsumer);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
