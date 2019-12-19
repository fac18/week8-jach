BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS inventory CASCADE;


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    behaviour BOOLEAN,
    category VARCHAR(100) NULL
);


INSERT INTO users (name, behaviour, category) VALUES
('Ayub', true, 'Sports'),
('Alex', false, 'Education'),
('Pat', false, 'Technology'),
('Rosh', true, 'Food');


CREATE TABLE inventory (
    inv_id SERIAL PRIMARY KEY,
    category VARCHAR(100) NULL,
    gift VARCHAR(500) NOT NULL,
    behaviour BOOLEAN
);


INSERT INTO inventory (category, gift, behaviour) VALUES
('Sports', 'ball', true),
('Sports', 'rock', false),
('Education', 'book', true),
('Education', 'abacus', false),
('Food', 'hamburger and fries', true),
('Food', 'soggy toast', false),
('Technology', 'iMac', true),
('Technology', 'pencil', false);


COMMIT;
