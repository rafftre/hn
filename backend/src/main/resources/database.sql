CREATE TABLE IF NOT EXISTS reactions (
    post_id VARCHAR(32) PRIMARY KEY,
    light INT NOT NULL DEFAULT 0,
    boat INT NOT NULL DEFAULT 0,
    heart INT NOT NULL DEFAULT 0,
    money INT NOT NULL DEFAULT 0,
    CHECK (light >= 0),
    CHECK (boat >= 0),
    CHECK (heart >= 0),
    CHECK (money >= 0)
);

INSERT INTO reactions (post_id) VALUES ('lFthoYgwXZzfpNWyr5FD');
