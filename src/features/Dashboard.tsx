import {
  AppShell,
  Group,
  Space,
  ActionIcon,
  rem,
  useMantineColorScheme,
  Title,
  Input,
  Tooltip,
  Button,
  Select,
  NumberInput,
  Divider,
  TextInput,
  PasswordInput,
  Alert,
  Anchor,
  List,
  ThemeIcon
} from "@mantine/core";

import {
  IconAsterisk,
  IconBrandAsana,
  IconCircleCheck,
  IconMoon,
  IconPlus,
  IconRobot,
  IconTrash,
  IconUnlink
} from "@tabler/icons-react";
import { IconSunHigh } from "@tabler/icons-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ButtonCheckbox } from "@/components/ButtonCheckbox/ButtonCheckbox";
import { io } from "socket.io-client";
import { useForm } from "@mantine/form";
import { NavUserButton } from "./NavUserButton";

function ThemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const setLight = useCallback(() => setColorScheme("light"), []);
  const setDark = useCallback(() => setColorScheme("dark"), []);

  const onClick = colorScheme === "dark" ? setLight : setDark;

  let IconComponent = colorScheme === "dark" ? IconSunHigh : IconMoon;

  return (
    <ActionIcon onClick={onClick} size={42} variant='default' radius='sm'>
      <IconComponent style={{ width: rem(24), height: rem(24) }} />
    </ActionIcon>
  );
}
export function Dashboard() {
  return (
    <AppShell header={{ height: 60 }} padding='md'>
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Title order={3} size='h4' className='uppercase tracking-wide'>
            AutoBlogger
          </Title>
          <Space className='grow' />
          <NavUserButton />
          <Divider orientation="vertical" my="sm" />
          <ThemeToggle />
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <DashboardContent />
      </AppShell.Main>
    </AppShell>
  );
}

function KeywordRow({
  id,
  value,
  onDelete,
  onValue,
  kwCount
}: {
  id: number;
  value: string;
  onDelete: (id: number) => void;
  onValue: (id: number, val: string) => void;
  kwCount: number;
}) {
  return (
    <div className='flex items-center gap-x-3'>
      <Input
        flex={1}
        placeholder='Enter Keyword'
        leftSection={<IconBrandAsana size={16} />}
        value={value}
        onChange={event => onValue(id, event.target.value)}
      />
      <Tooltip
        label='Remove this keyword'
        transitionProps={{ duration: 200 }}
        withArrow
      >
        <ActionIcon
          disabled={kwCount <= 1}
          tabIndex={-1}
          onClick={() => onDelete(id)}
          size='lg'
          variant='light'
          color='red'
        >
          <IconTrash style={{ width: rem(22), height: rem(22) }} />
        </ActionIcon>
      </Tooltip>
    </div>
  );
}

const socket = io("http://localhost:4201");
// @ts-ignore
window.socket = socket;

type KeywordInput = {
  id: number;
  value: string;
};

function DashboardContent() {
  const nextKeywordId = useRef(1);
  const [keywords, setKeywords] = useState<KeywordInput[]>([
    { id: nextKeywordId.current++, value: "" }
  ]);

  const [status, setStatus] = useState<"idle" | "loading" | "error" | "done">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);
  const [downloadLinks, setDownloadLinks] = useState<string[]>([]);

  function addKeyword() {
    setKeywords(existing => [
      ...existing,
      { id: nextKeywordId.current++, value: "" }
    ]);
  }

  function removeKeyword(id: number) {
    setKeywords(existing => existing.filter(kw => kw.id != id));
  }

  function handleChange(id: number, newValue: string) {
    setKeywords(existing =>
      existing.map(kw => ({
        id: kw.id,
        value: kw.id === id ? newValue : kw.value
      }))
    );
  }

  useEffect(() => {
    socket.on("article_error", function (error) {
      setStatus("error");
      setError(error);
    });

    socket.on("article_done", function ({ download_links }) {
      setStatus("done");
      setDownloadLinks(download_links);
    });
  }, []);

  const form = useForm({
    initialValues: {
      generate_tags: false,
      generate_excerpt: false,
      article_type: "published",
      num_sections: 4,
      num_words: 100,
      wp_api_url: "",
      wp_username: "",
      wp_password: ""
    }

    // validate: {
    //   email: validateEmail,
    //   password: value =>
    //     value.length === 0 ? "Password cannot be empty" : null
    // }
  });

  type Values = typeof form.values;
  const generate = useCallback(async (v: Values) => {

    setStatus("loading");

    let keywordsData = keywords.map(kw => kw.value.trim()).filter(kw => kw.length > 0);
    console.log(keywordsData);

    let data = {
      // keywords: ["technology", "oranges"],
      keywords: keywordsData,
      article_type: v.article_type,
      wp_credentials: {
        api_url: v.wp_api_url,
        username: v.wp_username,
        password: v.wp_password
      },
      generate_tags: v.generate_tags,
      generate_excerpt: v.generate_excerpt,
      num_sections: v.num_sections,
      num_words: v.num_words
    };

    socket.emit("generate_article", data);
  }, [keywords]);

  return (
    <form
      onSubmit={form.onSubmit(generate)}
      className='mx-auto max-w-2xl pb-40'
    >
      <Title size='h3'>Generate Article</Title>

      <div className='mt-4 space-y-2'>
        {keywords.map(kw => (
          <KeywordRow
            key={kw.id}
            id={kw.id}
            value={kw.value}
            onValue={handleChange}
            onDelete={removeKeyword}
            kwCount={keywords.length}
          />
        ))}
      </div>
      <Button
        mt='lg'
        className='max-sm:w-full'
        variant='light'
        leftSection={<IconPlus size={14} />}
        onClick={addKeyword}
      >
        Add Keyword
      </Button>

      <Title size='h5' mt='lg'>
        Options
      </Title>

      <div className='mt-2 flex gap-x-4 gap-y-2 max-sm:flex-col'>
        <ButtonCheckbox
          title='Tags'
          description='Generate Post Tags'
          {...form.getInputProps("generate_tags")}
        />
        <ButtonCheckbox
          title='Excerpt'
          description='Generate Post Excerpt'
          {...form.getInputProps("generate_excerpt")}
        />
      </div>

      <Select
        mt='lg'
        label='Article Type'
        className='max-w-sm'
        placeholder='Select type'
        data={[
          { label: "Published", value: "published" },
          { label: "Draft", value: "draft" },
          { label: "Pending", value: "pending" }
        ]}
        allowDeselect={false}
        {...form.getInputProps("article_type")}
      />

      <div className='mt-8 flex gap-x-4 gap-y-2 max-sm:flex-col'>
        <NumberInput
          label='Sections'
          flex={1}
          description='Number of sections to generate'
          {...form.getInputProps("num_sections")}
        />
        <NumberInput
          flex={1}
          label='Words/Section'
          description='Number of words in each section'
          {...form.getInputProps("num_words")}
        />
      </div>

      <Divider mt='xl' mb='md' />

      <Title size='h4' mb='lg'>
        WordPress Information
      </Title>

      <TextInput
        label='Rest API URL'
        placeholder='Enter URL'
        leftSection={<IconUnlink size={16} />}
        {...form.getInputProps("wp_api_url")}
      />

      <div className='mt-4 flex gap-x-4 gap-y-4 max-sm:flex-col sm:mt-8'>
        <TextInput
          flex={1}
          leftSection={<IconUnlink size={16} />}
          label='Username'
          placeholder='Enter username'
          {...form.getInputProps("wp_username")}
        />
        <PasswordInput
          flex={1}
          leftSection={<IconAsterisk size={16} />}
          label='Password'
          placeholder='Enter password'
          {...form.getInputProps("wp_password")}
        />
      </div>

      <Button
        className='mt-12 max-sm:w-full'
        variant='filled'
        rightSection={<IconRobot size={20} />}
        loading={status === "loading"}
        type='submit'
      >
        Generate
      </Button>

      {status === "error" && (
        <Alert
          mt='lg'
          variant='filled'
          color='red'
          title='Error'
          icon={<IconRobot size={32} />}
        >
          {error}
        </Alert>
      )}
      {status === "done" && (
        <Alert
          mt='lg'
          variant='light'
          color='green'
          title='Article(s) Generated'
          icon={<IconRobot size={32} />}
        >
          <p>
            Great news! Your article(s) have been successfully generated and are
            ready for you to download. Click on the link(s) below to download
            your freshly crafted piece(s).
          </p>
          {downloadLinks.map(link => (
            <List
              key={link}
              withPadding
              size='sm'
              my='lg'
              spacing='sm'
              icon={
                <ThemeIcon color='pink' size={20} radius='lg'>
                  <IconCircleCheck
                    style={{ width: rem(12), height: rem(12) }}
                  />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Anchor
                  // href='http://localhost:4201/generated/2024-03-23_15-37:04-gen-ai-the-future-of-innovation.txt'
                  href={link}
                  target='_blank'
                  download
                  underline='hover'
                  size='sm'
                >
                  {/* http://localhost:4201/generated/2024-03-23_15-37:04-gen-ai-the-future-of-innovation.txt */}
                  {link}
                </Anchor>
              </List.Item>
            </List>
          ))}

          <p>Thanks for using our tool</p>
        </Alert>
      )}
    </form>
  );
}
