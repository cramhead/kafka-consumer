import { Injectable } from '@nestjs/common';
import { KafkaStreams, KafkaStreamsConfig } from 'kafka-streams';

const topic = 'my-first-topic';

const config: KafkaStreamsConfig = {
  noptions: {
    'metadata.broker.list': 'localhost:9095',
    'group.id': 'kafka-streams-test-native',
    'client.id': 'kafka-streams-test-name-native',
    'event_cb': true,
    'compression.codec': 'snappy',
    'api.version.request': true,
    'socket.keepalive.enable': true,
    'socket.blocking.max.ms': 100,
    'enable.auto.commit': false,
    'auto.commit.interval.ms': 100,
    'heartbeat.interval.ms': 250,
    'retry.backoff.ms': 250,
    'fetch.min.bytes': 100,
    'fetch.message.max.bytes': 2 * 1024 * 1024,
    'queued.min.messages': 100,
    'fetch.error.backoff.ms': 100,
    'queued.max.messages.kbytes': 50,
    'fetch.wait.max.ms': 1000,
    'queue.buffering.max.ms': 1000,
    'batch.num.messages': 10000
  },
  tconf: {
    'auto.offset.reset': 'earliest',
    'request.required.acks': 1
  },
  batchOptions: {
    'batchSize': 5,
    'commitEveryNBatch': 1,
    'concurrency': 1,
    'commitSync': false,
    'noBatchCommits': false
  }
};
@Injectable()
export class DataEventConsumer {
  kafkaStreams: KafkaStreams;
  constructor() {
    this.kafkaStreams = new KafkaStreams(config);

  }
  subscribe(): void {
    const kafkaTopicName = topic;
    const stream = this.kafkaStreams.getKStream(kafkaTopicName);
    stream.forEach(message => console.log(message));
    stream.start().then(() => {
      console.log('stream started, as kafka consumer is ready.');
    }, error => {
      console.log('streamed failed to start: ' + error);
    });
  }
}