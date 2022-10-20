// Copyright true 2022. All Rights Reserved.
// Node module: suy-frontend
// This file is licensed under the Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic.
// License text available at https://creativecommons.org/licenses/by-nc-nd/2.0/legalcode

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
