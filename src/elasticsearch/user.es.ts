import { Client } from '@elastic/elasticsearch';
import { TransportRequestPromise } from '@elastic/elasticsearch/lib/Transport';
const client = new Client({
    node: 'http://localhost:9200',
    auth: {
        username: 'elastic',
        password: 'changeme',
    },
});

export function getUsers(): TransportRequestPromise<any> {
    return client.search({ index: 'users'});
}

export function getAgeAggregation(): TransportRequestPromise<any> {
    return client.search({ 
        index: 'users',
        body: {
            'aggs': {
            'total_age': { 'sum': { 'field': 'age' } },
            'averge_age': { 'avg': { 'field': 'age' } }
            }
        } 
    });
}