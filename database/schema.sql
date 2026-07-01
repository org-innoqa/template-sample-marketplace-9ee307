CREATE TABLE IF NOT EXISTS vendors (
  id bigint generated always as identity primary key,
  name text not null,
  description text,
  created_at timestamptz default now()
);

CREATE TABLE IF NOT EXISTS products (
  id bigint generated always as identity primary key,
  vendor_id bigint references vendors(id),
  name text not null,
  price decimal not null,
  created_at timestamptz default now()
);

INSERT INTO vendors (name, description) VALUES ('Tech Gadgets', 'Latest electronics'), ('Home Decor', 'Handmade items');
INSERT INTO products (vendor_id, name, price) VALUES (1, 'Wireless Mouse', 29.99), (1, 'Mechanical Keyboard', 89.99), (2, 'Ceramic Vase', 45.00);