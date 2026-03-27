import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tvmnhefsgkvismiwvxrb.supabase.co';
const supabaseKey = 'sb_publishable_UxZ0ZNiHRmxDqaMAhdQZLQ_1njv_9yB';

export const supabase = createClient(supabaseUrl, supabaseKey);
