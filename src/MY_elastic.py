import requests 
from elasticsearch import Elasticsearch

# Define the Elasticsearch server URL
es = Elasticsearch("http://localhost:9200")

# Step 1: Create a Collection (Index)
index_name = "patents"
es.indices.create(index=index_name, ignore=400) # Ignore if index already exists

# Step 2: Index Sample Data
sample_data = [
    {"patent_number": "12345", "patent_date": "2007-01-05", "patent_title": "Sample Patent 1"},
    {"patent_number": "67890", "patent_date": "2007-01-06", "patent_title": "Sample Patent 2"}
]

for data in sample_data:
    es.index(index=index_name, body=data)

# Step 3: Index Patent Data from the API
api_url = "https://api.patentsview.org/patents/query"
query_params = {
    "q": '{"_gte": {"patent_date": "2007-01-04"}}',
    "f": '["patent_number", "patent_date", "patent_title"]'
}

response = requests.get(api_url, params=query_params)
patent_data = response.json()

# Index each patent from the API response
for patent in patent_data["patents"]:
    es.index(index=index_name, body=patent)

print("Indexing completed.")