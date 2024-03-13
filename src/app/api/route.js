import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

export const pool = new Pool({
  user: 'febpktxh',
  host: 'cornelius.db.elephantsql.com',
  database: 'febpktxh',
  password: 'k5uZaXkc8STgDV72nUzNYUUa8oUI987o',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export async function GET() {
    try {
      const data = await pool.query('SELECT * FROM db_ifms_campus');
      return NextResponse.json(data.rows);
    } catch (error) {
      return NextResponse.error('Erro interno do servidor', { status: 500 });
    }
  };